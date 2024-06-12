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
const EditTask = ({ handleEditTask, task, allusers }) => {
  const [newTask, setNewTask] = useState(task.text);
  console.log(newTask);
  const [newAssignedTo, setEditAssignedTo] = useState(task.assigned_to?._id);
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
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
            <label> Assigned To </label>
            <select
              className="p-1 rounded-lg bg-gray-700 text-white"
              value={newAssignedTo}
              onChange={(e) => setEditAssignedTo(e.target.value)}
            >
              <option key={task.assigned_to?._id} value={task.assigned_to?._id}>
                {' '}
                {task.assigned_to?.firstname + ' ' + task.assigned_to?.lastname}
              </option>
              {allusers &&
                allusers.map(
                  (iuser) =>
                    iuser._id !== task.assigned_to?._id && (
                      <option key={iuser._id} value={iuser._id}>
                        {iuser.firstname + ' ' + iuser.lastname}
                      </option>
                    )
                )}

              {/* Add more options as necessary */}
            </select>
          </form>
          <button
            onClick={() => {
              handleEditTask(task._id, newTask, newAssignedTo);
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
