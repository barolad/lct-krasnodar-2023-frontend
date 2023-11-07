const DashboardItem = (courier: any) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        {courier.name}
        <div>
          <p className="text-sm text-muted-foreground">
            {/*{formatDate(post.createdAt?.toDateString())}*/}
            {courier.grade}
          </p>
        </div>
      </div>
      {courier.location}
      {/*<PostOperations post={{ id: post.id, title: post.title }} />*/}
    </div>
  );
};

export default DashboardItem;
