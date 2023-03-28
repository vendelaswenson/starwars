import CharList from "./CharList";
import {render, cleanup} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
    it("renders without crashing", async () => {
      const utils = render(<CharList />, {wrapper: MemoryRouter});
      expect(utils).toMatchSnapshot();
      expect(utils).toBeTruthy();
    });
})  