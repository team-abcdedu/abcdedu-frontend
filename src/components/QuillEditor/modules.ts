import resizeImage from '@/utils/resizeImage';

const imageHandler = () => {
  console.log('imageHandler');

  const imgInput = document.createElement('input');
  imgInput.setAttribute('type', 'file');
  imgInput.setAttribute('accept', 'image/*');
  imgInput.click();

  const imgChangeHandler = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input?.files?.[0] || null;
    if (!file) return console.error('No file selected');

    let resizedImage: Blob | null = null;

    try {
      resizedImage = await resizeImage(file);
    } catch (error) {
      console.error(error);
    }

    // 서버로 보내고 응답으로 이미지 주소 받아서 quill에 이미지 추가
    console.log(resizedImage);
  };

  imgInput.addEventListener('change', imgChangeHandler);
};

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
    handlers: {
      image: imageHandler,
    },
  },
};

export default modules;
