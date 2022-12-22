import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../../components/rocket';
import { getRockets } from '../../redux/rockets/rocketsSlice';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.rockets.length === 0) dispatch(getRockets());
  }, [dispatch, rockets.rockets.length]);
  return (
    <section className="rocket">
      <div className="container">
        {rockets.loading && <h1>It is loading</h1>}
        {!rockets.loading && rockets.rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </section>
  );
};

export default Rockets;
