export const hooksWrapper = ({ children }) => {
    return (
        <TestProviders>
            <randomWrapper.Provider value={mockedValue}>
                {children}
            </randomWrapper.Provider>
        </TestProviders>
    );
};

import { useState } from "react";

export const useCustomCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };

    return {
        counter,
        incrementCounter,
        decrementCounter,
    };
};

import { act, renderHook } from "@testing-library/react";
import { hooksWrapper } from "<route to wrapper>";
import { useCustomCounter } from "<route to hook>";

describe("Counter Test", () => {
    it("counter increments successfully", () => {
        const { result } = renderHook(() => useCustomCounter(), {
            wrapper: hooksWrapper,
        });
        act(() => {
            result?.current?.incrementCounter();
        });
        expect(result?.current?.counter).toStrictEqual(1);
    });

    it("counter decrements successfully", () => {
        const { result } = renderHook(() => useCustomCounter(), {
            wrapper: hooksWrapper,
        });
        act(() => {
            result?.current?.decrementCounter();
        });
        expect(result?.current?.counter).toStrictEqual(-1);
    });
});
