import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function mockSelectFile(
  inputId = 'file-input',
  fileName = 'test.png',
  fileType = 'image/png',
  fileSizeInMB = 1,
) {
  const user = userEvent.setup();

  const fileContent = new Uint8Array(fileSizeInMB * 1024 * 1024);
  const filePath = [`C:\\fakepath\\${fileName}`];
  const file = new File([fileContent], fileName, { type: fileType });

  const fileInput = screen.getByTestId(inputId);
  const select = () => user.upload(fileInput, file);

  return { fileInput, filePath, select };
}
