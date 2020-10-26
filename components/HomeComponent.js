import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
// import { CAMPSITES } from "../shared/campsites";
// import { PROMOTIONS } from "../shared/promotions";
// import { PARTNERS } from "../shared/partners";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    promotions: state.promotions,
    partners: state.partners
  };
};

// function RenderItem({ item }) {
function RenderItem(props) {
  const { item } = props;

  if (props.isLoading) {
    return <Loading />;
  }
  if (props.errMess) {
    return (
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  }
  if (item) {
    return (
      <Card
        featuredTitle={item.name}
        // image={require('./images/react-lake.jpg')}>
        // redux
        image={{ uri: baseUrl + item.image }}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         campsites: CAMPSITES,
  //         promotions: PROMOTIONS,
  //         partners: PARTNERS
  //     };
  // }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView>
        {/* <RenderItem 
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                /> */}
        {/* redux */}

        {/* <RenderItem
          item={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          }
        />
        <RenderItem
          item={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
        />
        <RenderItem
          item={
            this.props.partners.partners.filter(
              (partner) => partner.featured
            )[0]
          }
        /> */}
        {/* Redux reactnative */}
        <RenderItem
          item={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          }
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
        />
        <RenderItem
          item={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          isLoading={this.props.promotions.isLoading}
          errMess={this.props.promotions.errMess}
        />
        <RenderItem
          item={
            this.props.partners.partners.filter(
              (partner) => partner.featured
            )[0]
          }
          isLoading={this.props.partners.isLoading}
          errMess={this.props.partners.errMess}
        />
      </ScrollView>
      // <View>
      //     <Text>Home Component</Text>
      // </View>
    );
  }
}

// export default Home;
export default connect(mapStateToProps)(Home);
