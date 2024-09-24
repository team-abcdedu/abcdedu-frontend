/** @description 400번대 서버 api 에러 */
export class ApiError extends Error {
  status: number;

  errorCode: string | undefined;

  constructor(message: string, status: number, errorCode?: string) {
    super(message);
    this.name = 'Api Error';
    this.status = status;
    this.errorCode = errorCode;
  }
}
