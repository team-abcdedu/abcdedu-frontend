function imgOnCanvas(
  img: HTMLImageElement,
  maxWidth: number,
  maxHeight: number,
) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  let { width, height } = img;
  if (width > height) {
    if (width > maxWidth) {
      height *= maxWidth / width;
      width = maxWidth;
    }
  } else if (height > maxHeight) {
    width *= maxHeight / height;
    height = maxHeight;
  }

  canvas.width = width;
  canvas.height = height;

  if (!ctx) return null;
  ctx.drawImage(img, 0, 0, width, height);

  return canvas;
}

export function resizeImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = event => {
      const img = new Image();

      img.onload = () => {
        const canvas = imgOnCanvas(img, 800, 800);
        if (!canvas) return reject(new Error('Failed to resize image'));

        // 캔버스에 그린 이미지를 Blob으로 변환
        canvas.toBlob(blob => blob && resolve(blob), 'image/webp');
      };

      img.src = event.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsDataURL(file);
  });
}

export default resizeImage;
