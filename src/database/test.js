const Database = require ('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {

    proffyValue = {
        name: "Wallace Felipe",
        avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQHr5LxALWOjXw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=oayaHzoVEwUn9tYkE84TrgGOikK7zIiwUfZr_14vFuA",
        whatsapp:"998356252",
        bio: 'nada'
    }

    classValue = {
        subject: 1,
        cost: "20"

    }

    classScheduleValues = [
        {
            weekday:1, 
            time_from: 720,
            time_to: 1220
        },
        {
            weekday:0, 
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    
    console.log(selectedClassesAndProffys)


    const selectClassesSchedules = await db.all (`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

    `)
})