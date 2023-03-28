import MainHeader from "./MainHeader";
import {render, cleanup} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
    it("renders without crashing", async () => {
      const utils = render(<MainHeader />, {wrapper: MemoryRouter});
      expect(utils).toMatchSnapshot();
      expect(utils).toBeTruthy();
    });
})  