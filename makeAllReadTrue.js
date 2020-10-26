let notifications = [
	{message: 'Lorem', read: true},
    {message: 'Ipsum', read: true},
    {message: 'Dolor', read: true},
    {message: 'Sit', read: false},
    {message: 'Amet', read: true}
];

let allRead = true;

let checkIfAllRead = notification => {
    return notification.read;
}

console.log(`Before: allRead = ${allRead}`);

allRead = notifications.every(checkIfAllRead);

console.log(`After: allRead = ${allRead}`);