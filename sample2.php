<?php
// Sample user data array
$users = [
    ["id" => 1, "name" => "John Doe", "email" => "john@example.com", "age" => 25],
    ["id" => 2, "name" => "Jane Smith", "email" => "jane@example.com", "age" => 30],
    ["id" => 3, "name" => "Bob Johnson", "email" => "bob@example.com", "age" => 28]
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Data Table</title>
    <style>
        table {
            border-collapse: collapse;
            width: 80%;
            margin: 20px auto;
            font-family: Arial, sans-serif;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
    </style>
</head>
<body>
    <h2 style="text-align: center;">User Data</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
        <?php foreach ($users as $user): ?>
        <tr>
            <td><?php echo htmlspecialchars($user['id']); ?></td>
            <td><?php echo htmlspecialchars($user['name']); ?></td>
            <td><?php echo htmlspecialchars($user['email']); ?></td>
            <td><?php echo htmlspecialchars($user['age']); ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>