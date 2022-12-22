import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import * as btn from '../components/reservebtn';
import ReserveBtn from '../components/reservebtn';
import Rocket from '../components/rocket';
import Rockets from '../pages/rockets/Rockets'

jest.mock('react-redux');

describe('Rocket page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Render rocket component', async () => {
    jest.spyOn(btn, 'default').mockImplementation();
    const obj = {
      id: '1',
      images: [],
      name: 'Falcon 1',
      description: 'Falcon 1 description',
      reserved: false,
    };
    const tree = render(<Rocket rocket={obj} />);
    const title = tree.getByText('Falcon 1');
    expect(tree).toMatchSnapshot();
    expect(title.textContent).toBe('Falcon 1');
  });

  it('renders rockets page', () => {
    useSelector.mockReturnValue({
      loading: false,
      error: '',
      rockets: [
        {
          id: "2",
          name: "Falcon 3",
          description: "Falcon description",
          images: [],
          reserved: false,
          wikipedia: "Https://www.wikipedia.com/falcon1",
        }
      ]
    }
    );

    const tree = render(<Rockets />)

    expect(tree).toMatchSnapshot();
  });

  it('Should render Cancel Reservation button when reserved = true', () => {
    const tree = render(<ReserveBtn id="falcon1" reserved />)
    expect(tree).toMatchSnapshot();
  });

  it('Should render Reserve Rocket button when reserved = true', () => {
    const tree = render(<ReserveBtn id="falcon1" reserved={false} />)
    expect(tree).toMatchSnapshot();
  });
});
