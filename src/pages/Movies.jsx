import { Outlet } from 'react-router-dom';

export default function Movies() {
  return (
    <div>
      <p>
        Movies Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
      <Outlet />
    </div>
  );
}
