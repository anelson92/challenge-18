
// const router = require('express').Router();

// const {
//     getThoughts,
//     getUserThought,
//     createThought,
//     updateThought,
//     deleteThought,
//     createReaction,
//     deleteReaction,
// } = require('../../controllers/thoughtController');

// router.route('/').get(getThoughts).post(createThought);

// router.route('/:userId').get(getUserThought);

// router.route('./:thoughtId').put(updateThought);

// router.route('./:thoughtId').delete(deleteThought);

// router.route('./:thoughtId/reactions').post(createReaction);

// router.route('./:thoughtId/reactions/:reactionId').delete(deleteReaction);

// module.exports = router; 

const router = require('express').Router();

const {
    getThoughts,
    getUserThought,
    createThought, 
    updateThought, 
    deleteThought, 
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router  
    .route('/:id')
    .get(getUserThought)
    .put(updateThought)
    .delete(deleteThought);

router  
    .route('/:thoughId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


module.exports = router; 
