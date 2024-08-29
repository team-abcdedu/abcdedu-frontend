const modules = {
  toolbar: {
    container: [
      [{ font: [] }, { size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      [
        { header: 1 },
        { header: 2 },
        { header: 3 },
        { header: 4 },
        'blockquote',
        'code-block',
      ],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  },
};

export default modules;
