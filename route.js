const allRoutes = [
    {
      path: "/",
      name: "Dashboard",
      imgPath: 'dashBoard',
      imgPath1: 'dashBoard2',
      permission: ['zapsAdminRole', 'zapsExecutiveRole', 'superAdminRole'],
    },
    {
      path: "/category-management-dashboard",
      name: "Service Category",
      imgPath: 'category',
      imgPath1: 'category2',
      permission: ['zapsAdminRole'],
    },
    {
      path: "/executive-dashboard",
      name: "Exec Dashboard",
      imgPath: 'execDashboard',
      imgPath1: 'execDashboard2',
      permission: ['zapsExecutiveRole'],
    },
    {
      path: "/superadmin-dashboard",
      name: "Super Admin Panel",
      imgPath: 'superDashboard',
      imgPath1: 'superDashboard2',
      permission: ['superAdminRole'],
    },
  ];

  let USER_TYPE = 'superAdminRole';
  const filteredRoutes = allRoutes?.filter(route =>
    route.permission.includes(USER_TYPE)
  );
  

  console.log('filteredRoutes', filteredRoutes)



  {filteredRoutes.map((item, index) => (
    <li
      key={index}
      className={`side-nav-list nav-item p-2 ps-1 pe-1 cursor-pointer ${
        activePath === item.path ? "active" : ""
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => handleNavLinkClick(item)}
    >
      <NavLink
        className={`nav-link ${
          activePath === item.path ? "active" : "text-white"
        }`}
      >
        <img
          src={
            hoveredIndex === index || activePath === item.path
              ? item.imgPath
              : item.imgPath1
          }
          width={24}
          height={24}
          className="imgPathPurple"
          alt=""
        />
        <span className="sideNav_title_name sub-nav-link sidenav-item-text-container">
          {item.name}
        </span>
      </NavLink>
    </li>
  ))}
  



  // ======================================================




  const baseRoutes = [
    {
      path: "/",
      name: "Dashboard",
      permission: ['zapsAdminRole', 'zapsExecutiveRole', 'superAdminRole'],
      component: ZapsAdminDashboard,
      imgPath: dashBoard,
      imgPath1: dashBoard2,
    },
    {
      path: "/category-management-dashboard",
      name: "Service Category",
      permission: ['zapsAdminRole'],
      component: CategoryManagement,
      imgPath: category,
      imgPath1: category2,
    },
    {
      path: "/executive-dashboard",
      name: "Exec Dashboard",
      permission: ['zapsExecutiveRole'],
      component: ExecutiveDashboard,
      imgPath: execDashboard,
      imgPath1: execDashboard2,
    },
  ];

  

  const filteredSideNav = baseRoutes.filter(route =>
    route.permission.includes(USER_TYPE)
  );

  




  const appRoutes = baseRoutes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={
        <PermissionWrapper
          element={<route.component />}
          permissions={route.permission}
          userRole={USER_TYPE}
        />
      }
    />
  ));
  


  // =======================================================


  import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { allRoutes } from "./allRoutes"; // your config file
import PermissionWrapper from "./PermissionWrapper";

const componentMap = {
  Dashboard: lazy(() => import("../pages/Dashboard")),
  CategoryManagement: lazy(() => import("../pages/CategoryManagement")),
};

// const USER_TYPE = 'zapsAdminRole'; // your logic

export const AdminRoutes = () => {
  const filteredRoutes = allRoutes.filter(route =>
    route.permission.includes(USER_TYPE)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {filteredRoutes.map((route, index) => {
        const Component = componentMap[route.component];
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <PermissionWrapper
                element={<Component />}
                permissions={route.permission}
                userRole={USER_TYPE}
              />
            }
          />
        );
      })}
    </Suspense>
  );
};



// =====================================================




