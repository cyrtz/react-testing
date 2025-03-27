
import filterList from './filterList';
import getStatusById from './getStatusById';


// jest.mock('./filterList', () => {
//     return jest.fn();
// });

const mockList = [
    { id: 1, status: 'active' },
    { id: 2, status: 'inactive' },
    { id: 3, status: 'pending' },
];


jest.mock('./filterList', () => {
  return jest.fn().mockImplementation((list, id) => mockList.filter((item) => item.id === id)[0]);
});

describe('getStatusById', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return active status when get element id 1', () => {
        filterList.mockReturnValue({status: 'active'});
        const id = 1;
        console.log('Mocked filterList result:', filterList(mockList, id));
        const result = getStatusById(mockList, id);

        expect(result).toBe('active');
    });

    it('should return inactive status when get element id 2', () => {
        filterList.mockReturnValue({status: 'inactive'});
        const id = 2;
        const result = getStatusById(mockList, id);

        expect(result).toBe('inactive');
        // expect(filterList).toHaveBeenCalledWith(mockList, 'fake-id');
    });
});
