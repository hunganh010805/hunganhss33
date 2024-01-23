let phoneBook = {
    contact1: {
        name: "trungnguyen",
        phone: "0298866555",
        email: "nguyenngo555",
        displayInfo: function() {
            console.log("Tên:", this.name);
            console.log("Điện thoại:", this.phone);
            console.log("Email:", this.email);
            console.log("\n");
        },
    },
    contact2: {
        name: "trong",
        phone: "09867255622",
        email: "nhotrongkkk",
        displayInfo: function() {
            console.log("Tên:", this.name);
            console.log("Điện thoại:", this.phone);
            console.log("Email:", this.email);
            console.log("\n");
        },
    },
};
for (let contactKey in phoneBook) {
    let contact = phoneBook[contactKey];
    contact.displayInfo();
}
