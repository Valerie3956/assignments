const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issues")

//get all issue

issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//get issues by user

issueRouter.get("/user", (req, res, next) => {
    Issue.find({user: req.auth._id}, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//add new issue

issueRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

//delete issue

// issueRouter.delete("/:issueId", (req, res, next) => {
//     Issue.find({_id : req.params.issueId}, (err, issue) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         if(issue.user !== req.auth._id){
//             res.status(403)
//             return next(new Error("You may not delete someone else's issue"))
//         }
//         issue.delete(
//             // {_id : req.params.issueId, user: req.auth._id},
//             (err, deletedIssue) => {
//                 if(err){
//                     res.status(500)
//                     return next(err)
//                 }
//                 return res.status(200).send(`successfully deleted ${deletedIssue.title}`)
//             })
//         }
//     )
// })


issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
      { _id: req.params.issueId, user: req.auth._id },
      (err, deletedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully delete issue`)
      }
    )
  })
//modify issue

// issueRouter.put("/:issueId", (req, res, next) => {
//     Issue.find({_id : req.params._id}, (err, issue) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         if(issue.user !== req.auth._id){
//             res.status(403)
//             return next(new Error("You may not modify someone else's issue"))
//         }
//         issue.updateOne(
//             // {_id: req.params.issueId, user: req.auth._id},
//             req.body,
//         {new:true},
//         (err, updatedIssue) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             console.log(req.auth._id)
//             return res.status(201).send(updatedIssue)
//         })
//         }
//     )
// })

issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueId, user: req.auth._id },
      req.body,
      { new: true },
      (err, updatedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )
  })


module.exports = issueRouter