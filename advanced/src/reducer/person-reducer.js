export default function personReducer(person, action) {
    switch(action.type) {
        case 'updated': {
            const {prev, current} = action;
            // const prev = action.prev;
            // const current = action.currrnt;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                        return {...mentor, name: current};
                    }
                    return mentor;
                }),
            };
        }
        case 'added': {
            const {name, title} = action;
            return {
                ...person,
                mentors: [...person.mentors, {name, title}]
            }
        }
        case 'deleted': {
            return {
                ...person,
                mentors: person.mentors.filter((m) => m.name !== action.name)
            }
        }
        default: {
            throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
        }
    }
}