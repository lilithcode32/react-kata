import {render, screen, waitFor} from '@testing-library/react';
import axios from 'axios';
import ServiceSelect from './ServiceSelect';

jest.mock('axios');

describe("<ServiceSelect />", () => {
    it("displays services by serviceName", async () => {
        const dataPromise = Promise.resolve({data:[
            {
                id: 1,
                serviceName: "Synthetic Oil Change",
                serviceDuration: 1800,
            },
            {
                id: 2,
                serviceName: "Brake Inspection",
                serviceDuration: 1800,
            }
        ]});
        axios.get.mockImplementationOnce(() =>dataPromise );

        render(<ServiceSelect />)
        await waitFor(() => dataPromise);

        expect(screen.getByText("Brake Inspection")).toBeInTheDocument();
        expect.assertions(1);
    });
});
