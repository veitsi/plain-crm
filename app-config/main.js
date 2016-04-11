A.app({
    appName: "CRM for event agency",
    appIcon: "calendar-check-o",
    menuItems: [
        {
            name: "Orders",
            entityTypeId: "Order",
            icon: "shopping-bag"
        },
        {
            name: "Events",
            icon: "calendar",
            entityTypeId: "Event"
        },
        {
            name: "Clients",
            icon: "users",
            entityTypeId: "Client"
        }
    ],
    entities: function (Fields) {
        return {
            Event: {
                title: 'Events',
                fields: {
                    name: Fields.text("Name").required(),
                    id: Fields.text("ID").readOnly(),
                    description: Fields.textarea("Description").required(),
                    photo: Fields.cloudinaryImage("Photo"),
                    date: Fields.date("Giving Date").required(),
                    type: Fields.radio("Type", ["Excursion", "MK", "Animations", "Courses"]),
                    priceChild: Fields.money("Price for child", 0).required(),
                    priceAdult: Fields.money("Price for adult", 0).required(),
                    maxCount: Fields.integer("Max count"),
                    minCount: Fields.integer("Min count"),
                    ageLimit: Fields.integer("Age limit", 0)
                },
                 referenceName: "name"
            },
            Client: {
                title: 'Clients',
                fields: {
                    idCertificate: Fields.text("Certificate #").required(),
                    name: Fields.text("Name").required(),
                    surname: Fields.text("Surname").required(),
                    phone: Fields.text("phone").required(),
                    mail: Fields.email("Email"),
                    childrenCount: Fields.integer("Children Count", 0).required(),
                    discounts: Fields.integer("Discounts", 0),
                    balance: Fields.money("Balance ", 0)
                },
                 referenceName: "surname"

            },
            Order: {
                title: 'Orders',
                fields: {
                    user_surname: Fields.fixedReference('Client','Client'),
                    event_name:Fields.fixedReference('Event','Event')
                }
            }
        }
    }
});
