import {
  faCalendarAlt,
  faEnvelope,
  faLock,
  faMapMarked,
  faPhoneAlt,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

import React, {
  useEffect,
  useState
} from 'react';

import {
  Icon
} from 'app/core/components/icon';

import {
  Loader
} from 'app/core/components/loader';

import {
  Popup
} from 'app/core/components/popup/popup';

import {
  fetchAPI
} from 'app/fetch/fetch';

import {
  Card
} from 'app/ui/home/components/card';

import {
  CardContainer
} from 'app/ui/home/components/cardContainer';

import {
  formatDataForDisplay
} from 'app/utils/utils';

const RANDOM_USER_API = process.env.REACT_APP_RANDOM_USER_API_URL;

export function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [userData, setUserData] = useState([]);
  const [userPhotoUri, setUserPhotoUri] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const icons = [faUserCircle, faEnvelope, faCalendarAlt, faMapMarked, faPhoneAlt, faLock];

  const getUserInfo = () => {

    const requestOptions = {
      method: 'GET',
      url: RANDOM_USER_API,
    };

    fetchAPI(requestOptions)
      .then(res => {

        setUserData(formatDataForDisplay(res.results));
        setUserPhotoUri(res.results[0].picture.large);
        setIsLoading(false);

      })
      .catch(e => {

        setIsError(true);
        setIsLoading(false);
        setErrorMessage(e.message);
        setShowPopup(true);

      });

  };

  useEffect(() => {

    getUserInfo();

  }, []);

  return (
    <CardContainer>
      <Card isLoading={isLoading}>
        {isLoading ? (
          <Loader />
        ) : isError ? <Popup
          onButtonPress={() => setShowPopup(!showPopup)}
          isError={isError}
          show={showPopup}
          message={errorMessage}
        /> : (
          <React.Fragment>
            <div className='profile-pic-container'>
              <img alt={userData[active].title} className='profile-pic' src={userPhotoUri} />
            </div>
            <div className='user-info'>
              <p className='title'>{userData[active].title}</p>
              <p className='user-value'>{userData[active].value}</p>
              <ul>
                {icons.map((icon, index) => <li className={active === index ? 'active-item' : ''} onMouseEnter={() => setActive(index)} key={index}><Icon isActive={index === active} icon={icon} /></li>)}
              </ul>
            </div>
          </React.Fragment>
        )}
      </Card>
    </CardContainer>
  );

}
