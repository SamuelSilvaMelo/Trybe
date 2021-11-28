module.exports = (err, req, res, next) => {
  const { error } = err;

  switch (true) {
    case (error === 'No Registered Book'):
      return res.status(404).json({ message: 'No Registered Book' });
          
    case (error === 'Not Found'):
      return res.status(404).json({ message: 'Not found' });

    case (error === 'Title is required'):
      return res.status(400).json({ message: 'Title is required' });

    case (error === 'Title must be longer than 6 characters'):
      return res.status(400).json({ message: 'Title must be longer than 6 characters' });

    case (error === 'Author is required'):
      return res.status(400).json({ message: 'Author is required' });

    case (error === 'Author must be longer than 6 characters'):
      return res.status(400).json({ message: 'Author must be longer than 6 characters' });

    case (error === 'PageQuanity is required'):
      return res.status(400).json({ message: 'PageQuanity is required' });

    default:
      return res.status(500).json({ message: 'Something went wrong here' });
  }
};
