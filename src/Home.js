import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap"; 


// Landing page for Snack or Booze App -- renders number of items on menu
function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe! ...Now serving DRINKS!
            </h3>
          </CardTitle>
          <h5>- Currently serving {snacks.length} snacks!</h5>
          <h5>- Currently serving {drinks.length} drinks!</h5>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
