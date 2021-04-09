const newRoomEndpoint = `${window.location.origin}/api/rooms`;

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available.
 */
async function createRoom() {
  console.log('CreateRoom function called...');
  // const exp = Math.round(Date.now() / 1000) + 60 * 30;
  // const options = {
  //   properties: {
  //     exp: exp,
  //   },
  // };
  // let response = await fetch(newRoomEndpoint, {
  //   method: 'POST',
  //   body: JSON.stringify(options),
  //   mode: 'cors',
  // });
  // let room = await response.json();
  // console.log('room:', room);
  // return room;

  // Comment out the above and uncomment the below, using your own URL
  return { url: 'https://ardraw.daily.co/firstRoom' };
}

export default { createRoom };
