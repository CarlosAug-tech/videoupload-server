import * as Yup from 'yup';
import Comment from '../models/Comment';
import User from '../models/User';
import Video from '../models/Video';
import Notification from '../schemas/Notification';

class CommentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      content: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { content } = req.body;

    const videoExists = await Video.findOne({
      where: { id },
    });

    if (!videoExists) {
      return res.status(400).json({ error: 'Video not found' });
    }

    const comment = await Comment.create({
      content,
      video_id: id,
      user_id: req.userId,
    });

    const user = await User.findByPk(req.userId);

    if (comment) {
      if (videoExists.user_id !== user.id) {
        await Notification.create({
          content: `${user.name}, comentou em seu video! `,
          user_id: videoExists.user_id,
        });
      }
    }

    return res.json(comment);
  }
}

export default new CommentController();
