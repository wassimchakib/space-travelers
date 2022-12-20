import './rockets.css';

const Rockets = () => (
  <section className="rocket">
    <div className="container">
      <table>
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thaicom</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ducimus, dolore sequi et impedit molestiae odit quam repellendus
              quis dignissimos delectus vitae libero saepe similique quia eos.
              Incidunt, provident molestias.
            </td>
            <td><span className="tag">Not A Member</span></td>
            <td><button type="button">Join Mission</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default Rockets;
