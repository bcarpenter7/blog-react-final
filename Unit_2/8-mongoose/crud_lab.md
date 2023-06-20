# Basic CRUD

Pick a model and build a CRUD app based on it with all 7 restful routes

- Include view pages, MVC folder structure, and some styling
- The user should be able to Create, Read, Update, and Delete items from the database

## NOTES

A big chunk of this project is figuring out how to make update and delete work.  Work together as well as with other groups to figure it out!  The basic syntax would be something like the following:

Delete controller:

```javascript
async function delete(req, res) {
  try {
    await Fruit.findByIdAndRemove(req.params.id);
    res.redirect('/fruits');
  }  catch (err) {
    res.render('/fruits', { errorMsg: err.message });
  }
}
```

Update controller:

```javascript
async function update(req, res) {
  try {
    await Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.redirect(`/fruits/${req.params.id}`);
  }  catch (err) {
    res.render(`/fruits/${req.params.id}/edit`, { errorMsg: err.message });
  }
}
```

Don't worry about `{new:true}` too much.  You won't end up using it.  It just sets what `findByIdAndUpdate` returns to the object after the update.  If set to `false` it returns the object before the update.
