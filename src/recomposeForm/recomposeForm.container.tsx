import { compose, lifecycle, withHandlers, withProps, withState, withStateHandlers } from 'recompose';

import RecomposeForm from './recomposeForm';

export const handleChangeColorHandler = (state: any) => () => {
  console.log(`Le state est : ${JSON.stringify(state)}`);
  return {
    color: state.color === 'black' ? 'white' : 'black'
  };
};

const enhance = compose(
  withState('firstName', 'setFirstName', 'Jean'),
  withState('lastName', 'setLastName', 'Peplu'),
  withState('age', 'setAge', 25),
  withHandlers({
    handleSubmit: (props: any) => (e: any) => {
      e.preventDefault();
      console.log(props);
      console.log(e);
      // submit data somewhere :)
    }
  }),
  withProps({
    message: 'Ceci un message'
  }),
  withStateHandlers(
    (props) => {
      return {
        color: 'red'
      };
    },
    {
      handleChangeColor: handleChangeColorHandler
    }
  ),
  lifecycle({
    componentDidMount() {
      console.log('recompose componentDidMount');
    },
    componentDidUpdate(oldProps: any) {
      console.log(`recompose componentDidUpdate -- oldProps : ${JSON.stringify(oldProps)}`);
    },
    componentWillReceiveProps(nextProps: any) {
      console.log(`recompose componentWillReceiveProps -- nextProps : ${JSON.stringify(nextProps)}`);
    }
  }),
  (BaseComponent: any) => (props: any) => {
    console.log(props);
    const bgColor = 'red';
    return <BaseComponent {...props} bgColor={bgColor} />;
  }
);

export default enhance(RecomposeForm);
