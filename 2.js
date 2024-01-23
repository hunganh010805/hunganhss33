var phoneBook = {
    contact1: {
        name: "trungnguyen",
        phone: "0298866555",
        email: "nguyenngo555",
    },
    contact2: {
        name: "trong",
        phone: "09867255622",
        email: "nhotrongkkk",
    },
};
for (let contactKey in phoneBook) {
    let contact = phoneBook[contactKey];
    console.log("Tên:", contact.name);
    console.log("Điện thoại:", contact.phone);
    console.log("Email:", contact.email);
    console.log("\n");
}
