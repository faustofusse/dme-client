import React, { useRef } from "react";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import { useSelector } from "react-redux";

registerPlugin(FilePondPluginImageExifOrientation, 
    FilePondPluginImagePreview, FilePondPluginImageResize, 
    FilePondPluginImageEdit, FilePondPluginImageCrop, 
    FilePondPluginImageValidateSize, FilePondPluginImageTransform);

const Files = (props) => {
  const token = useSelector(state => state.token);
  const newUser = useRef({});
  const setNewUser = user => newUser.current = user;
  
  return (
    <div className="App">
      <FilePond
        files={[]}
        onprocessfile={(e,f) => props.onUpload(newUser.current)}
        server={{ process: (...params) => props.uploadImage(...params, token).then(u => setNewUser(u)) }}

        acceptedFileTypes={['image/jpeg', 'image/png']}
        instantUpload={false}
        allowMultiple={false}
        labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'

        stylePanelLayout={'compact circle'}
        styleLoadIndicatorPosition={'center bottom'}
        styleProgressIndicatorPosition={'right bottom'}
        styleButtonRemoveItemPosition={'left bottom'}
        styleButtonProcessItemPosition={'right bottom'}

        imagePreviewHeight={170}
        imageCropAspectRatio={'1:1'}
        imageResizeTargetWidth={300}
        imageResizeTargetHeight={300}
      />
    </div>
  );
}

export default Files;