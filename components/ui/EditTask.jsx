'use client';
import React from 'react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
const EditTask = ({ handleEditTask, task }) => {
  const [editTask, setEditTask] = useState(task.text);
  console.log(editTask);
  const [editAssignedTo, setEditAssignedTo] = useState(task.assignedTo);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger> ✎</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <form>
            <input
              type="text"
              className="flex-1 p-2 rounded-lg bg-gray-700 text-white"
              onChange={(e) => setEditTask(e.target.value)}
              value={editTask}
            />
            <label> Assigned To </label>
            <select
              className="p-2 rounded-lg bg-gray-700 text-white"
              value={editAssignedTo}
              onChange={(e) => setEditAssignedTo(e.target.value)}
            >
              <option value="Self">Self</option>
              <option value="Snehal">Snehal</option>
              <option value="Pooja">Pooja</option>

              {/* Add more options as necessary */}
            </select>
          </form>
          <button
            onClick={() => {
              handleEditTask(task.id, editTask, editAssignedTo);
              setOpen(false);
            }}
            className="bg-blue-500 p-2 rounded-lg text-white"
          >
            Update
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditTask;
