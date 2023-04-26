export class Result<T> {
  isSuccess: boolean;
  private data: any;
  message?: string;
  errorCode?: number;
  constructor(
    isSuccess: boolean,
    data: any,
    message?: string,
    errorCode?: number
  ) {
    this.data = data;
    this.isSuccess = isSuccess;
    this.message = message;
    this.errorCode = errorCode;
  }

  getValue(): T {
    return this.data;
  }

  static ok<U>(data: U, message?: string): Result<U> {
    return new Result(true, data, message);
  }

  static fail<U>(mesage: string, errorCode: number): Result<U> {
    return new Result(false, null, mesage, errorCode);
  }
}
