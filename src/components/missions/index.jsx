import './styles.css';

const Missions = () => (
  <section>
    <div className="container">
      <table className="table-container">
        <thead id="thead">
          <tr>
            <th className="th">Missions</th>
            <th className="th">Description</th>
            <th className="th">status</th>
            <th className="th" aria-label="empty-table-head" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td mission-title">Thaicom</td>
            <td className="td">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae esse consectetur
              inventore quod possimus veniam ipsum ab quam recusandae ad eius minus in nulla
              veritatis, dolorem doloremque harum sed non, itaque nesciunt? Dolorum dolore
              asperiores debitis! Exercitationem, optio esse quasi nisi in, obcaecati fuga eum
              cumque mollitia aliquid culpa officia.
            </td>
            <td className="td">
              <span className="status-not-a-member">NOT A MEMBER</span>
            </td>
            <td className="td">
              <button className="join-mission-btn" type="button">
                Join Mission
              </button>
            </td>
          </tr>
          <tr>
            <td className="td">Thaicom</td>
            <td className="td">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae esse consectetur
              inventore quod possimus veniam ipsum ab quam recusandae ad eius minus in nulla
              veritatis, dolorem doloremque harum sed non, itaque nesciunt? Dolorum dolore
              asperiores debitis! Exercitationem, optio esse quasi nisi in, obcaecati fuga eum
              cumque mollitia aliquid culpa officia.
            </td>
            <td className="td">
              <span className="status-not-a-member">NOT A MEMBER</span>
            </td>
            <td className="td">
              <button className="join-mission-btn" type="button">
                Join Mission
              </button>
            </td>
          </tr>
          <tr>
            <td className="td">Thaicom</td>
            <td className="td">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae esse consectetur
              inventore quod possimus veniam ipsum ab quam recusandae ad eius minus in nulla
              veritatis, dolorem doloremque harum sed non, itaque nesciunt? Dolorum dolore
              asperiores debitis! Exercitationem, optio esse quasi nisi in, obcaecati fuga eum
              cumque mollitia aliquid culpa officia.
            </td>
            <td className="td">
              <span className="status-not-a-member">NOT A MEMBER</span>
            </td>
            <td className="td">
              <button className="join-mission-btn" type="button">
                Join Mission
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default Missions;
