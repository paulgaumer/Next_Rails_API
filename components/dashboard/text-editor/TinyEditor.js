import { Editor } from '@tinymce/tinymce-react';

const TinyEditor = ({ value, setValue }) => {
  const handleEditorChange = (content, editor) => {
    // console.log('Content was updated:', content);
    setValue(content);
  };

  return (
    <Editor
      initialValue={value}
      apiKey="8x3vvwrmu2i8lsnqgmtjyojtxkbnk2tbo618a7ki34gxqtdh"
      init={{
        height: 500,
        menubar: false,
        elementpath: false,
        body_class: 'editor-body',
        content_style: '.editor-body { font-size: 0.875rem }',
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | link image media |',
        media_alt_source: false,
        media_poster: false,
        default_link_target: '_blank',
        link_context_toolbar: true,
        image_title: false,
        /* enable automatic uploads of images represented by blob or data URIs*/
        automatic_uploads: true,
        /*
    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
    images_upload_url: 'postAcceptor.php',
    here we add custom filepicker only to Image dialog
  */
        file_picker_types: 'image',
        /* and here's our custom image picker*/
        file_picker_callback: function (cb, value, meta) {
          var input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');

          /*
      Note: In modern browsers input[type="file"] is functional without
      even adding it to the DOM, but that might not be the case in some older
      or quirky browsers like IE, so you might want to add it to the DOM
      just in case, and visually hide it. And do not forget do remove it
      once you do not need it anymore.
    */

          input.onchange = function () {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function () {
              /*
          Note: Now we need to register the blob in TinyMCEs image blob
          registry. In the next release this part hopefully won't be
          necessary, as we are looking to handle it internally.
        */
              var id = 'blobid' + new Date().getTime();
              var blobCache = tinymce.activeEditor.editorUpload.blobCache;
              var base64 = reader.result.split(',')[1];
              var blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);

              /* call the callback and populate the Title field with the file name */
              cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
          };

          input.click();
        },
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyEditor;
