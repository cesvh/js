function identity<T>(value: T) {
    return value;
}

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

interface Box<T> {
    content: T
}

type ApiResponse<T> = {
    status: 200;
    data: T
};

function Generics() {
    identity<string>('Hola');
    identity<number>(299);
    identity<boolean>(true);

    getFirstElement([1, 2, 3]);
    getFirstElement(["a", "b", "c"]);
    getFirstElement([true, false]);

    const box1: Box<string> = { content: "ces" };
    const box2: Box<number> = { content: 299 };
    const box3: Box<boolean> = { content: true };

    const response1: ApiResponse<{ name: string, age: number }> = {
        status: 200,
        data: { name: "ces", age: 1991 }
    };
    const response2: ApiResponse<string> = {
        status: 200,
        data: "algún dato en especial"
    };
    const response3: ApiResponse<string[]> = {
        status: 200,
        data: ["cesar", "vega"]
    };

    return (
        <div>
        </div>
    )
}

export default Generics