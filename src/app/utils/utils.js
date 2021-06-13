export function formatDate(dateString) {

  if (!dateString) {

    return '0/0/000';

  }

  const birthday = new Date(dateString);

  return `${birthday.getDate()}/${birthday.getMonth() + 1}/${birthday.getFullYear()}`;

}

export function formatDataForDisplay(data) {

  if (!Array.isArray(data)) {

    return;

  }

  const userData = data[0];

  const fullName = {
    title: 'Hi, my name is',
    value: userData?.name?.first + ' ' + userData?.name?.last,
  };

  const email = {
    title: 'My email address is',
    value: userData?.email,
  };

  const birthday = {
    title: 'My birthday is',
    value: formatDate(userData?.dob?.date),
  };

  const address = {
    title: 'My address is',
    value: userData?.location?.street?.number + ' ' + userData?.location?.street?.name,
  };

  const phone = {
    title: 'My phone number is',
    value: userData?.phone,
  };

  const password = {
    title: 'My password is',
    value: userData?.login?.password,
  };

  return [fullName, email, birthday, address, phone, password];

}

export function handleKeyDown(e, func) {

  if (e.keyCode === 13) {

    typeof func === 'function' && func();

  }

}
