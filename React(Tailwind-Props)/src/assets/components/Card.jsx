/** @format */
import "../css/card.scss";
export default function Card() {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="card">
              <div className="cover item-a">
                <h1>
                  Little
                  <br />
                  Bonsai
                </h1>
                <span className="price">$79</span>
                <div className="card-back">
                  <a href="#">Add to cart</a>
                  <a href="#">View detail</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="card">
              <div className="cover item-b">
                <h1>
                  Tropical
                  <br />
                  Leaf
                </h1>
                <span className="price">$35</span>
                <div className="card-back">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
