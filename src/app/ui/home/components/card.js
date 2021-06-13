import PropTypes from 'prop-types';

import styled, {
  css
} from 'styled-components';

export const Card = styled.div`
  width: 600px;
  background-color: white;
  border-radius: 10px;
  height: 370px;
  border: 2px solid #2c2e31;

  ${props =>
    props &&
    props.isLoading &&
    css`
    border: 2px solid white;
    `}

  .profile-pic {
    width: 150;
    height: 150;
    border-radius: 50%;
    position: absolute;
    border: 1px solid rgba(0,0,0,.25);
    background: #fff;
    padding: 5px;
  }

  .profile-pic-container {
    height: 110px;
    display: relative;
    padding-top: 25px;
    width: 100%;
    border-bottom: 1px solid #ced9e1;
    display: flex;
    justify-content: center;
    background-color: #F9F9F9;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .user-info {
    display: flex;
    margin-top: 68px;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: 10px;
  }

  li {
    display: inline-block;
    color: grey;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .title {
    color: #999;
    font-size: 18px;
    margin: 0;
  }

  .user-value {
    color: #2c2e31;
    font-size: 38px;
    margin: 5px;
  }

  .loader {
    padding: 20px;
  }

  .active-item {
    border-top: 2px solid rgba(67, 149, 57, 0.5);
  }
`;

Card.propTypes = {
  isLoading: PropTypes.bool,
};