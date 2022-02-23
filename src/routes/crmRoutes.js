import {
    addNewContact,
    getContact,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Add middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContact)
        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithID)
        .put(updateContact)
        .delete(deleteContact)


    app.route('/post')
        .get()
        .post();

    app.route('/post/:postID')
        .get()
        .put()
        .delete()

    app.route('/user')
        .get()
        .post();

    app.route('/user/:postID')
        .get()
        .put()
        .delete()
}

export default routes;