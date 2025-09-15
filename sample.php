<?php
session_start();

// Reset session users
if (isset($_GET['reset'])) {
    session_destroy();
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// Preload 5 students by default (only once)
if (!isset($_SESSION['users'])) {
    $_SESSION['users'] = [
        ['name' => 'Alice Johnson',  'email' => 'alice@example.com'],
        ['name' => 'Bob Smith',      'email' => 'bob@example.com'],
        ['name' => 'Charlie Brown',  'email' => 'charlie@example.com'],
        ['name' => 'Diana Prince',   'email' => 'diana@example.com'],
        ['name' => 'Ethan Hunt',     'email' => 'ethan@example.com'],
    ];
}

// Handle Create
if (isset($_POST['add'])) {
    $_SESSION['users'][] = [
        'name' => $_POST['name'],
        'email' => $_POST['email']
    ];
}

// Handle Delete
if (isset($_GET['delete'])) {
    $i = (int)$_GET['delete'];
    if (isset($_SESSION['users'][$i])) {
        array_splice($_SESSION['users'], $i, 1);
    }
}

// Handle Update
if (isset($_POST['update'])) {
    $i = (int)$_POST['index'];
    if (isset($_SESSION['users'][$i])) {
        $_SESSION['users'][$i]['name']  = $_POST['name'];
        $_SESSION['users'][$i]['email'] = $_POST['email'];
    }
}

// Handle Edit Request
$edit_index = isset($_GET['edit']) ? (int)$_GET['edit'] : null;
$user_edit = ($edit_index !== null && isset($_SESSION['users'][$edit_index])) ? $_SESSION['users'][$edit_index] : null;
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP CRUD Demo (No Database)</title>
    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">

    <h2 class="mb-4 text-center">Simple PHP CRUD (Session Only)</h2>

    <!-- Reset Button -->
    <div class="text-end mb-3">
        <a href="?reset=1" class="btn btn-danger">Reset to Default 5 Users</a>
    </div>

    <!-- Create or Update Form -->
    <div class="card p-4 mb-4 shadow-sm">
        <form method="post" class="row g-3">
            <div class="col-md-5">
                <input type="text" class="form-control" name="name"
                       value="<?php echo $user_edit ? htmlspecialchars($user_edit['name']) : ""; ?>"
                       required placeholder="Name">
            </div>
            <div class="col-md-5">
                <input type="email" class="form-control" name="email"
                       value="<?php echo $user_edit ? htmlspecialchars($user_edit['email']) : ""; ?>"
                       required placeholder="Email">
            </div>
            <div class="col-md-2 d-grid">
                <?php if ($user_edit): ?>
                    <input type="hidden" name="index" value="<?php echo $edit_index; ?>">
                    <button type="submit" name="update" class="btn btn-warning">Update</button>
                    <a href="<?php echo $_SERVER['PHP_SELF']; ?>" class="btn btn-secondary mt-2">Cancel</a>
                <?php else: ?>
                    <button type="submit" name="add" class="btn btn-success">Add</button>
                <?php endif; ?>
            </div>
        </form>
    </div>

    <!-- User List -->
    <table class="table table-bordered table-striped shadow-sm">
        <thead class="table-dark">
            <tr>
                <th>#</th><th>Name</th><th>Email</th><th>Actions</th>
            </tr>
        </thead>
        <tbody>
        <?php foreach ($_SESSION['users'] as $i => $user): ?>
            <tr>
                <td><?php echo $i+1; ?></td>
                <td><?php echo htmlspecialchars($user['name']); ?></td>
                <td><?php echo htmlspecialchars($user['email']); ?></td>
                <td>
                    <a href="?edit=<?php echo $i; ?>" class="btn btn-sm btn-primary">Edit</a>
                    <a href="?delete=<?php echo $i; ?>" onclick="return confirm('Delete this user?');" class="btn btn-sm btn-danger">Delete</a>
                </td>
            </tr>
        <?php endforeach; ?>
        <?php if (empty($_SESSION['users'])): ?>
            <tr><td colspan="4" class="text-center">No users yet.</td></tr>
        <?php endif; ?>
        </tbody>
    </table>

</body>
</html>
