import { render, screen } from "@testing-library/react";
import ImageList from "./ImageList";

jest.mock('./ImageItem', () => () => (
    <div data-test-id="image-item-title">ImagesItem</div>
));

describe('ImageList', () => {
    it('should render correct image items when have data', async () =>{
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                json: () => Promise.resolve({
                    products: [
                        {
                            id: '1',
                            title: '打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵',
                            images: ['https://bit.ly/4228IT0'],
                        },
                        {
                            id: '2',
                            title: '島波海道。單車跳島之旅',
                            images: ['https://bit.ly/4b5nLPO'],
                        },
                    ],
                }),
            })
        );
        render(<ImageList />);

        const imageItems = await screen.findAllByTestId('image-item-title');
        expect(imageItems).toHaveLength(2);
    })
})