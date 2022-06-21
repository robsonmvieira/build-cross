export interface UseCase<Input, Output> {
    execute(input: Input): Promise<Output> | Output;
}
export default UseCase;
