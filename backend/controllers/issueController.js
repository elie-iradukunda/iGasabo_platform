import { createIssue, getIssuesByUser, getAllIssues } from '../models/issueModel.js';

export async function submitIssue(req, res) {
  const { title, description, status_id, location_id } = req.body;
  const user_id = req.user.userId;

  try {
    const issue = await createIssue({ title, description, user_id, status_id, location_id });
    res.status(201).json({ message: 'Issue submitted', issue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit issue' });
  }
}

export async function userIssues(req, res) {
  const user_id = req.user.userId;

  try {
    const issues = await getIssuesByUser(user_id);
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user issues' });
  }
}

export async function allIssues(req, res) {
  try {
    const issues = await getAllIssues();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all issues' });
  }
}
