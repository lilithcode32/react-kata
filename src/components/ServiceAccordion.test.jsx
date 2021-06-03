import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import axios from 'axios';
import ServiceAccordion from './ServiceAccordion';

jest.mock('axios');

describe("<ServiceAccordion />", () => {
    it("displays services by serviceName", async () => {
        const mockService = {
            id: 2,
            serviceName: "Brake Inspection",
            serviceDuration: 1800,
        };

        render(<ServiceAccordion service={mockService} />)
        expect(screen.getByText("Brake Inspection")).toBeInTheDocument();
        expect.assertions(1);
    });
    it("gets appointments", async () => {
        const mockService = {
            id: 2,
            serviceName: "Brake Inspection",
            serviceDuration: 1800,
        };

        const mockAppointments = {data:[{
            id: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx1",
            serviceName: "Brake Inspection",
            serviceId: 2,
            apptStartTime: '2021-06-13T16:29:00.000Z',
            apptDuration: 1800,
        },
        {
            id: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx2",
            serviceName: "Brake Inspection",
            serviceId: 2,
            apptStartTime: '2021-06-13T15:25:00.000Z',
            apptDuration: 1800,
        }]};
        const dataPromise = Promise.resolve(mockAppointments);

        axios.get.mockImplementationOnce(() => dataPromise );

        render(<ServiceAccordion service={mockService} />);
        await fireEvent.click(screen.getByText('Brake Inspection'))
        await waitFor(() => dataPromise);

        expect(screen.getByText( "Sunday June 13th 10:25:00 am")).toBeInTheDocument();
        expect(screen.getByText("Sunday June 13th 11:29:00 am")).toBeInTheDocument();
        expect.assertions(2);

    });
});
