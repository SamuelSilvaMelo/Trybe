module.exports = (req, _res, next) => {
  const { title, author, pageQuantity } = req.body;

  switch (true) {
    case (!title):
      return next({ error: 'Title is required' });

    case (title.length < 6):
      return next({ error: 'Title must be longer than 6 characters' });

    case (!author):
      return next({ error: 'Author is required' });

    case (author.length < 6):
      return next({ error: 'Author must be longer than 6 characters' });
  
    case (!pageQuantity):
      return next({ error: 'PageQuanity is required' });

    default:
      break;
  }
  
  next();
};