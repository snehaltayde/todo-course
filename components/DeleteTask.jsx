import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const DeleteTask = ({ handleDeleteTask, task }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger> 🗑</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <button
              onClick={() => handleDeleteTask(task._id)}
              className="bg-blue-500 p-2 rounded-lg text-white mt-2"
            >
              Confirm Delete
            </button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteTask;
