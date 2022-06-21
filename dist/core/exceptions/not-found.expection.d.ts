import { ExceptionBase } from '.';
import { Exceptions } from '.';
export declare class NotFoundException extends ExceptionBase {
    readonly name = Exceptions.notFound;
}
