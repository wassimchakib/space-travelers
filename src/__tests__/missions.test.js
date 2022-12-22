import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import Mission from '../components/missions/mission';
import Missions from '../components/missions';
import JoinMissionButton from '../components/joinMissionButton';

jest.mock('react-redux');

describe('Test suite for missions components', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render mission component', () => {
    const tree = render(
      <table>
        <tbody>
          <Mission
            missionName="Thaicom"
            joinedMission={false}
            missionId="9D1B7E0"
            description="Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology."
          />
        </tbody>
      </table>
    );

    const title = tree.getByText('Thaicom');

    expect(tree).toMatchSnapshot();

    expect(title.textContent).toBe('Thaicom');
  });

  test('should render missions component', () => {
    useSelector.mockReturnValue([
      { missionId: '9D1B7E0', missionName: 'Thaicom', description: 'test', joinedMission: false },
    ]);

    const tree = render(<Missions />);

    expect(tree).toMatchSnapshot();
  });

  test('should render joinMissionButton with joinedMission equal to false ', () => {
    const tree = render(<JoinMissionButton joinedMission={false} missionId="9D1B7E0" />);
    expect(tree).toMatchSnapshot();
  });

  test('should render joinMissionButton with joinedMission equal to true ', () => {
    const tree = render(<JoinMissionButton joinedMission missionId="9D1B7E0" />);
    expect(tree).toMatchSnapshot();
  });
});
